"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const formSchema = z.object({
  leito: z.string(),
  respiracao: z.string().optional(),
  respValue: z.string().optional(),
  alimentacao: z.string().optional(),
  acessoVenoso: z.string().optional(),
  acompanhante: z.string().optional(),
  pele: z.string().optional(),
  diurese: z.string().optional(),
  evacuacao: z.string().optional(),
  dor: z.string().optional(),
  alergia: z.string().optional(),
  diuValue: z.string().optional(),
  dorValue: z.string().optional(),
});

const Evolucoes = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      leito: "",
      respiracao: "ar ambiente",
      alimentacao: "",
      respValue: "",
      acessoVenoso: "",
      acompanhante: "",
      pele: "",
      diurese: "",
      diuValue: "",
      evacuacao: "",
      dor: "ausente",
      alergia: "",
      dorValue: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const respWatch = useWatch({ control: form.control, name: "respiracao" });
  const diureseWatch = useWatch({ control: form.control, name: "diurese" });
  const dorWatch = useWatch({ control: form.control, name: "dor" });

  return (
    <div className="p-4 sm:p-8 flex flex-col max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold">Gerador de Evolução</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="leito"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leito</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alimentacao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alimentação</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Modo de alimentação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jejum">Jejum</SelectItem>
                        <SelectItem value="alimentação VO">
                          Alimentação VO
                        </SelectItem>
                        <SelectItem value="SNE">Sonda Nasoenteral</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="respiracao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Respiração</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Modo de respiração" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ar ambiente">Ar Ambiente</SelectItem>
                        <SelectItem value="cateter nasal">
                          Cateter Nasal
                        </SelectItem>
                        <SelectItem value="mascara de alta concentração">
                          Máscara de Alta Concentração
                        </SelectItem>
                        <SelectItem value="névoa umida">Névoa Úmida</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {respWatch !== "ar ambiente" && (
              <FormField
                control={form.control}
                name="respValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Fluxo de O<sub>2</sub>
                    </FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input {...field} type="number" className="w-full" />
                        <span className="bg-gray-300 rounded-2xl px-2 py-1 font-bold">
                          L/min
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="acessoVenoso"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Acesso Venoso</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="ex: AVP em MSE" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="acompanhante"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Acompanhante</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Acompanhante" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sim">Sim</SelectItem>
                        <SelectItem value="não">Não</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pele"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pele</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="ex: Íntegra, com ferida..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="diurese"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Diurese</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Diurese" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="presente">Presente</SelectItem>
                        <SelectItem value="ausente">Ausente</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {diureseWatch !== "ausente" && (
              <FormField
                control={form.control}
                name="diuValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modo de Diurese</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Modo de diurese" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="espontanea">Espontânea</SelectItem>
                          <SelectItem value="SVD">
                            Sonda Vesical de Demora
                          </SelectItem>
                          <SelectItem value="Uropen">Uropen</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="evacuacao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Evacuação</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Evacuação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="presente">Presente</SelectItem>
                        <SelectItem value="ausente">Ausente</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dor</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Dor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="presente">Presente</SelectItem>
                        <SelectItem value="ausente">Ausente</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {dorWatch !== "ausente" && (
              <FormField
                control={form.control}
                name="dorValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Local da Dor</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="ex: Flanco direito, suprapúbica"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="alergia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alergia</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nega alergias ou (Dipirona, Paracetamol)"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Gerar Evolução</Button>
        </form>
      </Form>
    </div>
  );
};

export default Evolucoes;

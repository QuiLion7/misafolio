"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { TypeAnimation } from "react-type-animation";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Link from "next/link";

const profileFormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "O seu nome deve ter pelo menos 3 caracteres.",
    })
    .max(30, {
      message: "O seu nome não deve ter mais de 30 caracteres.",
    }),
  email: z
    .string({
      required_error: "Escreva seu E-mail",
    })
    .email(),
  message: z
    .string()
    .max(160, {
      message: "Sua mensagem não deve ter mais 160 caracteres.",
    })
    .min(7, {
      message: "Sua mensagem deve ter pelo menos 7 caracteres.",
    }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function Contact() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ProfileFormValues) {
    const messageWithUserInfo = `Site\n\nNome: ${data.name}\nE-mail: ${data.email}\nMensagem: ${data.message}`;

    const whatsappUrl = `https://wa.me/5534991184741?text=${encodeURIComponent(
      messageWithUserInfo,
    )}`;

    window.open(whatsappUrl, "_blank");

    form.reset();
  }

  return (
    <section
      id="contact"
      className="flex h-svh w-full flex-col items-center justify-center"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 md:flex-row">
        <div className="flex h-[300px] w-full flex-col items-center justify-end pb-8 sm:h-[350px] sm:justify-center md:h-full md:flex-1">
          <div className="flex w-full max-w-[500px] flex-col items-center justify-center gap-1 md:gap-4">
            <motion.h3
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-lg font-bold uppercase tracking-wide text-primary md:text-xl lg:text-2xl"
            >
              Entre em Contato
            </motion.h3>
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex-col text-center text-3xl font-bold uppercase md:text-4xl lg:text-5xl"
            >
              <h1>Vamos estudar </h1>
              <TypeAnimation
                sequence={["Juntos!", 2000, "Forex!", 2000]}
                speed={50}
                className="text-primary"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center justify-center gap-2 p-2"
            >
              <Link
                href="https://discord.gg/EDKyJ29jUQ"
                target="_blank"
                className="group relative h-auto w-[40px] rounded-full bg-background/30 p-2 hover:bg-background/100 md:w-[50px]"
              >
                <FaDiscord className="h-auto w-full" />
                <span className="absolute bottom-0 right-[53px] w-auto rounded-xl bg-background p-2 text-center text-xs uppercase opacity-0 duration-300 group-hover:opacity-100">
                  GRUPO NO WHATSAPP
                </span>
              </Link>
              <Link
                href="https://chat.whatsapp.com/Gn3zIQvOAVhCKdfRN0iiei"
                target="_blank"
                className="group relative h-auto w-[40px] rounded-full bg-background/30 p-2 hover:bg-background/100 md:w-[50px]"
              >
                <FaWhatsapp className="h-auto w-full" />
                <span className="absolute bottom-0 left-[53px] w-auto rounded-xl bg-background p-2 text-center text-xs uppercase opacity-0 duration-300 group-hover:opacity-100">
                  GRUPO NO WHATSAPP
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex h-full w-full items-start justify-center px-4 sm:items-center md:flex-1 md:justify-start"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-[500px] space-y-7 rounded-xl border-2 border-primary/30 p-4 duration-300 hover:border-primary/100"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu nome"
                        {...field}
                        className="rounded-xl bg-background/20 focus:border-b-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu e-mail"
                        {...field}
                        className="rounded-xl bg-background/20 focus:border-b-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Conte-me um pouco da solução que deseja..."
                        className="resize-none rounded-xl bg-background/20 focus:border-b-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex w-full items-center justify-center">
                <Button
                  type="submit"
                  className="w-full max-w-[250px] cursor-pointer rounded-xl bg-gradient-to-r from-purple-900 via-purple-600 to-violet-600 font-bold uppercase text-white"
                >
                  Enviar
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const signInForm = z.object({
  email: z.string().email(),
});

type signInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signInForm>();

  async function handleSignIn(data: signInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Enviamos um link de autenticação para o seu email.", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data),
        },
      });
    } catch (err) {
      toast.error("Não foi possível fazer o login. Tente novamente.");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant={"ghost"} asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu E-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
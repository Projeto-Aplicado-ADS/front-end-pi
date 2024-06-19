import React, { useState } from "react";
import { Dosis, Poppins } from "next/font/google";
import { useForm } from "react-hook-form";
import { AlertTriangleIcon, BirdIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { handleLoginByEmailAndPassword } from "../api/handleLoginByEmailAndPassword";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const dosis = Dosis({
  weight: "600",
  subsets: ["latin"],
});

function LoginScreen() {
  const [error, setError] = useState("");
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      handleLoginByEmailAndPassword(data)
        .then((response) => {
          if (response.status === 201) {
            reset();
            toast({
              variant: "default",
              title: "Sucesso no Login!",
              description:
                "Parabéns! Login realizado com sucesso. você sera redirecionado para o menu.",
            });
            setTimeout(() => {
              router.push("/");
            }, 3000);
          }
        })
        .catch((error) => {
          setError(error.response.data);
          return error;
        });
    } catch (e) {
      console.log(e);
    }
  };

  console.log(error);

  const password = (event) => {
    if (event.target.value.length < 6) {
      event.target.setCustomValidity("Senha deve ter pelo menos 6 caracteres");
    } else {
      event.target.setCustomValidity("");
    }
  };

  return (
    <>
      <div className="flex h-screen flex-row justify-center items-center w-full gap-32 lg:flex lg:flex-row md:flex md:flex-col md:gap-12 sm:flex sm:flex-col sm:gap-8 sm:w-full max-sm:flex max-sm:flex-col max-sm:gap-5 max-sm:w-full">
        <div className="flex items-center gap-4 lg:hidden">
          <BirdIcon />
          <h1 className={`${dosis.className} text-3xl md:text-center`}>
            Pousada Quinta do Ypuã
          </h1>
        </div>
        <Card className="w-[430px] h-[480px] max-sm:border-none max-sm:w-full max-sm:shadow-none">
          <CardHeader className={`${poppins.className}`}>
            <h1 className="text-2xl">Bem-Vindo!</h1>
            <p className="text-1xl">Login</p>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-5"
            >
              <div className="w-full space-y-1">
                <label>Email</label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Por Favor insira um email!",
                    },
                  })}
                  placeholder="Exp: johndoe@gmail.com"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
                {(errors.password && (
                  <span className="text-red-600 text-xs flex items-center w-full pt-1">
                    <AlertTriangleIcon className="w-4 mr-1" />
                    {errors.password.message}
                  </span>
                )) ||
                  (error && (
                    <span className="text-red-600 text-xs flex items-center w-full pt-1">
                      <AlertTriangleIcon className="w-4 mr-1" />
                      {error}
                    </span>
                  ))}
              </div>
              <div className="flex flex-col w-full space-y-1">
                <label>Senha</label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Por Favor insira uma senha!",
                    },
                    onChange: (event) => password(event),
                  })}
                  placeholder="Sua Senha"
                  type="password"
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
                {(errors.password && (
                  <span className="text-red-600 text-xs flex items-center w-full pt-1">
                    <AlertTriangleIcon className="w-4 mr-1" />
                    {errors.password.message}
                  </span>
                )) ||
                  (error && (
                    <span className="text-red-600 text-xs flex items-center w-full pt-1">
                      <AlertTriangleIcon className="w-4 mr-1" />
                      {error}
                    </span>
                  ))}
              </div>
              <div className="flex flex-row items-center w-full">
                <p className={`${poppins.className} text-sm`}>Lembrar de mim</p>
                <Checkbox id="save" className="ml-2" />
              </div>
              <div className="w-full pt-5">
                <button
                  type="submit"
                  className="p-2 bg-[#FB7901] text-white w-full rounded-md hover:bg-[#FF9839] hover:delay-75 transition"
                >
                  Login
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="flex flex-col justify-end h-screen w-[510px] lg:flex lg:flex-col lg:items-center lg:justify-center md:hidden max-md:hidden">
          <div className="flex items-center gap-2">
            <BirdIcon />
            <h1 className={`${dosis.className} text-3xl`}>
              Pousada Quinta do Ypuã
            </h1>
          </div>
          <img src="/Hotel-svg.svg" />
        </div>
      </div>
    </>
  );
}

export default LoginScreen;

"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { getMe } from "@/modules/home/lib/getMe";
import { useForm, Controller } from "react-hook-form";
import { Lato, Montserrat } from "next/font/google";
import Image from "next/image";
import { AlertTriangleIcon } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {updateUserName, updateUserEmail, updateUserPhone} from "../services/updateUserData";

const lato = Lato({
    weight: "400",
    subsets: ["latin"],
});

const dosis = Montserrat({
    weight: "500",
    subsets: ["latin"],
});

function PerfilForm() {
    const router = useRouter();
    const token = Cookies.get("token");
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            full_name: "",
            email: "",
            phone: "",
        },
    });

    useEffect(() => {//TODO falta pegar o ID do meliante par atualizar.
        if (token) {
            getMe(token)
                .then((response) => {
                    setOpen(false);
                    setValue("full_name", response?.full_name || "");
                    setValue("email", response?.email || "");
                    setValue("phone", response?.phone || "");
                })
                .catch((error) => {
                    if (error?.response?.status === 401) {
                        setOpen(true);
                        setTimeout(() => {
                            router.push("/login");
                        }, 5000);
                        Cookies.remove("token");
                    }
                });
        }
    }, [token, router, setValue]);

    const onSubmit = async (data) => {
        console.log('data', data);
        try {
            delete data.confirm_password;
            console.log('data', data);
            updateUserName(data.id)
            updateUserEmail(data.id)
            updateUserPhone(data.id)
                .then((response) => {
                    if (response.status === 201) {
                        reset();
                        toast({
                            variant: "default",
                            title: "Sucesso!",
                            description:
                                "Usuário atualizado com sucesso.",
                        });
                        setTimeout(() => {
                            router.push("/login");
                        }, 2000);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={`${dosis.className} flex flex-row w-full h-screen justify-center items-center`}>
            <Card className="w-4/5 h-4/5 px-20 pt-10 bg-gray-100">
                <CardHeader className="font-bold text-3xl">Perfil</CardHeader>
                <CardContent className="bg-[#FFCB9C] p-2 border-2 rounded-2xl flex flex-row items-center h-5/6">
                    <div className="w-2/5 h-full flex justify-center items-center p-5 bg-white rounded-2xl border-2">
                        <div className="w-full h-full flex justify-center items-center p-5 bg-gray-200 border-2">
                            <Image
                                src="../../../profile.svg"
                                width={300}
                                height={500}
                                alt="img"
                                className="h-full object-contain"
                            />
                        </div>
                    </div>
                    <form
                        className="bg-white border-2 rounded-2xl m-10 ml-2 mr-0 p-20 w-3/5 flex flex-col items-center h-full justify-center"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className={`${lato.className} text-[25px] text-center mb-5`}>
                            Dados do Perfil
                        </h1>
                        <div className="flex flex-col w-full mb-5">
                            <label>Nome Completo</label>
                            <input
                                {...register("full_name", {
                                    required: {
                                        value: true,
                                        message: "Por Favor insira um nome!",
                                    },
                                })}
                                placeholder="Exp: John Doe"
                                type="text"
                                className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                            />
                            {errors.full_name && (
                                <span className="text-red-600 text-xs flex items-center w-full pt-1">
                                    <AlertTriangleIcon className="w-4 mr-1" />
                                    {errors.full_name.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col w-full mb-5">
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
                            {errors.email && (
                                <span className="text-red-600 text-xs flex items-center w-full pt-1">
                                    <AlertTriangleIcon className="w-4 mr-1" />
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col w-full mb-5">
                            <label>Telefone</label>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Insira um numéro de telefone",
                                    },
                                    pattern: {
                                        value: /^\+55\d{11}$/,
                                        message: "Por favor insira um numéro de telefone!",
                                    },
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <PhoneInput
                                        value={value}
                                        onChange={onChange}
                                        defaultCountry="br"
                                        inputClassName="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
                                        className="flex h-10 w-full"
                                    />
                                )}
                            />
                            {errors.phone && (
                                <span className="text-red-600 text-xs flex items-center w-full pt-1">
                                    <AlertTriangleIcon className="w-4 mr-1" />
                                    {errors.phone.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-row gap-x-2 w-full">
                            <button
                                type="submit"
                                className="p-2 bg-[#FB7901] text-white w-[120px] rounded-md hover:bg-[#FF9839] hover:delay-75 transition"
                            >
                                Atualizar Dados
                            </button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default PerfilForm;

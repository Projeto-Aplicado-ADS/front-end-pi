"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
  SelectGroup,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { DatePickerWithRange } from "@/modules/reservas/components/Forms/DatePickerWithRange";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { tipoReserva } from "../data/dataReserva";
import { SelectTipoReserva } from "./SelectTipoReserva";
import { SelectStatusReserva } from "./SelectStatusReserva";
import { usePathname } from "next/navigation";
import { postNewReserva } from "../services/postNewReserva";
import { format, parse } from "date-fns";
import { useToast } from "@/components/ui/use-toast";

function CreateNewReserva() {
  const pathname = usePathname();
  const { toast } = useToast();

  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: {
      tipo_reserva: "",
      status_reserva: "",
      data_reserva: "01/07/2024",
      data_check_in: "",
      data_check_out: "",
      valor_reserva: 0,
    },
  });

  const onSubmit = (data) => {
    postNewReserva(pathname, data).then((response) => {
      if (response.status === 201) {
        toast({
          description: "Reserva criada com sucesso!",
        });
        window.location.href = "/reservas/";
      }
    });
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <Card className="w-[700px]">
          <CardHeader className="flex flex-col space-y-8">
            <CardTitle>
              Reserva
              <CardDescription>
                Complete todos os dados para realizar a reserva
              </CardDescription>
            </CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-end gap-5 w-full">
                  <DatePickerWithRange
                    control={control}
                    name="data_check_in"
                    className={"pb-4"}
                    title={"Check-in"}
                  />
                  <DatePickerWithRange
                    control={control}
                    name="data_check_out"
                    className={"pb-4"}
                    title={"Check-out"}
                  />
                </div>
                <SelectTipoReserva control={control} errors={errors} />
                <SelectStatusReserva control={control} />
                <Label>Valor da Reserva</Label>
                <Input {...register("valor_reserva")} type="number" />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Criar Reserva</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}

export default CreateNewReserva;

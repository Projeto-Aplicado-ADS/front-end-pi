import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { statusReserva } from "../data/dataReserva";
import { Controller } from "react-hook-form";

export const SelectStatusReserva = ({ control, value }) => {
  return (
    <>
      <Label>Status da Reserva</Label>
      <Controller
        control={control}
        name="status_reserva"
        rules={{
          required: {
            value: true,
            message: "Selecione o status da Reserva",
          },
        }}
        render={({ field: { onChange } }) => (
          <>
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger id="status_reserva">
                <SelectValue placeholder="Selecione o status da Reserva" />
              </SelectTrigger>
              <SelectContent>
                {statusReserva.map((item) => (
                  <>
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  </>
                ))}
              </SelectContent>
            </Select>
          </>
        )}
      />
    </>
  );
};

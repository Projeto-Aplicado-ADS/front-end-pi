import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { usePathname } from "next/navigation";

export const SelectTipoReserva = ({ value, control, errors }) => {
  const tipoReserva = [
    { value: "diaria", label: "Diária" },
    { value: "semanal", label: "Semanal" },
    { value: "mensal", label: "Mensal" },
  ];

  return (
    <>
      <Label>Tipo de Reserva</Label>
      <Controller
        control={control}
        name="tipo_reserva"
        rules={{
          required: {
            value: true,
            message: "Selecione o status da Reserva",
          },
        }}
        render={({ field: { onChange } }) => (
          <>
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger id="tipo_reserva">
                <SelectValue placeholder="Selecione o tipo de Reserva" />
              </SelectTrigger>
              <SelectContent>
                {tipoReserva.map((item) => (
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

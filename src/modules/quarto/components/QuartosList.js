"use client";

import TableComponent from "@/components/Table/TableComponent";
import React, { useMemo } from "react";

export function QuartosList() {
  const data = useMemo(
    () => [
      {
        numero_quarto: "World",
        numero_andar: "Hello",
        tipo_quarto: "World",
        descricao: "Hello",
        status_quarto: "World",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        header: "Número do Quarto",
        accessorKey: "numero_quarto",
      },
      {
        header: "Andar do Quarto",
        accessorKey: "numero_andar",
      },
      {
        header: "Tipo de quarto",
        accessorKey: "tipo_quarto",
      },
      {
        header: "Descrição",
        accessorKey: "descricao", // accessor is the "key" in the data
      },
      {
        header: "Status do Quarto",
        accessorKey: "status_quarto",
      },
    ],
    []
  );

  return (
    <div className="App">
      <TableComponent columns={columns} data={data} />
    </div>
  );
}

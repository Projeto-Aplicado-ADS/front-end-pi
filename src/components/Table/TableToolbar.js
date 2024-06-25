import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import { TableFilter } from "./TableFilter";

export function TableToolbar({ table }) {
  const status = [
    { value: "livre", label: "livre" },
    { value: "ocupado", label: "Ocupado" },
    { value: "reservado", label: "Reservado" },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <input
          placeholder="Filtrar tipo de quarto"
          value={table.getColumn("tipo_quarto")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("tipo_quarto")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px] flex rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium"
        />
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <Edit className="mr-2 h-4 w-4" />
          Editar Quarto
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-8 border-dashed hover:bg-red-500 hover:text-white"
        >
          <Trash className="mr-2 h-4 w-4" />
          Remover Quarto
        </Button>
        {table.getColumn("status_quarto") && (
          <TableFilter
            column={table.getColumn("status_quarto")}
            title="Status Quarto"
            options={status}
          />
        )}
      </div>
    </div>
  );
}

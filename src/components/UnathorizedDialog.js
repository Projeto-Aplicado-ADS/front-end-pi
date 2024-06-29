import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import React from "react";

function UnathorizedDialog({ open, setOpen }) {
  return (
    <Dialog open={open} onOpenChange={setOpen} className="z-50">
      <DialogContent>
        <DialogHeader>
          <h1 className="text-xl font-semibold">Acesso não autorizado!</h1>
          <DialogTitle>Sessão expirada!</DialogTitle>
        </DialogHeader>
        <p className="text-sm">
          A sua sessão de acesso expirou. Você será redirecionado
          automaticamente para o login.
        </p>
      </DialogContent>
    </Dialog>
  );
}

export default UnathorizedDialog;

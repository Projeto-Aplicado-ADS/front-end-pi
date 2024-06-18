import React, { useState } from "react";
import { useEffect } from "react";
import { TimerResetIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Montserrat } from "next/font/google";
import axios from "axios";

const dosis = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

function Feed() {
  const today = new Date();
  const [username, setUsername] = useState();

  const getFormattedDate = (date) => {
    return date.toLocaleDateString("pt-BR", { day: "numeric" });
  };

  const getFormattedDay = (date) => {
    return date.toLocaleDateString("pt-BR", { weekday: "long" });
  };

  const todayDate = getFormattedDate(today);
  const todayDay = getFormattedDay(today);

  useEffect(() => {
    getFormattedDate(today);
    getFormattedDay(today);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8090/users/email/joao_rizzo@gmail.com", {
        withCredentials: true,
      })
      .then((response) => {
        setUsername(response.data.full_name);
      });
  }, []);

  return (
    <>
      <div className={`${dosis.className} flex flex-row h-screen w-full`}>
        <div className="w-full h-screen flex flex-col gap-5">
          <h1 className="text-xl ml-12 pt-20 font-semibold">
            Bem vindo, {username}!
          </h1>
          <div className="flex flex-row items-center ml-12">
            <TimerResetIcon />
            <p className="text-xl font-semibold">Próximas reservas</p>
          </div>
          <div className="flex flex-col ml-12">
            <Card className="w-[760px]">
              <CardContent className="h-96"></CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-row justify-end w-full h-screen">
          <div className="w-[320px] h-screen shadow-lg text-xl">
            <div className="flex flex-col items-center justify-center h-3/6 gap-3">
              <h1>Hoje</h1>
              <p className="text-xl font-semibold">{todayDate}</p>
              <p>{todayDay}</p>
              <p>Nenhuma reserva agendada</p>
            </div>
            <Separator className="w-[290px] ml-5" />
            <div className="flex flex-col items-center justify-center h-3/6 gap-3">
              <h1>Proxima reserva:</h1>
              <p className="text-xl font-semibold">17</p>
              <p>{todayDay}</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;

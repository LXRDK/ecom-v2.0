"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
export default function Home() {
  const [value, setValue] = useState(50);
  return (
    <div className="text-slate-500 flex flex-col gap-y-4   text-4xl font-bold  gap-4 w-screen p-5">
      <div>
        <Button variant={"elevated"}>I am button</Button>
      </div>
      <div>
        <Checkbox />
      </div>
      <div>
        <Input placeholder="fuck u" />
      </div>
      <div>
        <Progress onChange={() => setValue(value)} value={value} />
      </div>
      <div>
        <Textarea placeholder="hello" />
      </div>
    </div>
  );
}

import type { InputHTMLAttributes } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function InputPair({
  label,
  description,
  textarea = false,
  ...rest
}: {
  label: string;
  description: string;
  textarea?: boolean;
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) {
  return (
    <div className="space-y-2 fles flex-col">
      <Label htmlFor={rest.id} className="flex flex-col gap-1">
        {label}
        <small className="text-muted-foreground">{description}</small>
      </Label>
      {textarea ? (
        <Textarea rows={4} className="resize-none" {...rest} />
      ) : (
        <Input {...rest} />
      )}
    </div>
  );
}

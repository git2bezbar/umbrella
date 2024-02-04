import { useState } from "react"
import { Input } from "./input"
import { Label } from "./label"

export interface ColorProps  {
  currentColor?: string;
  disabled?: boolean;
}

const Color = ({ currentColor, disabled }:ColorProps) => {
  const [color, setColor] = useState(currentColor || "#000000");

  return(
    <>
    <Label htmlFor="color" className={`relative ${disabled ? "pointer-events-none cursor-not-allowed" : ""}`}>
      <Input disabled={disabled} className="pointer-events-none uppercase" placeholder={color} />
      <span
        className={`w-4 h-4 absolute top-[15px] right-4 rounded-md ${disabled ? "opacity-50" : ""}`}
        style={{ backgroundColor: color }}
      ></span>
      <Input
        onChange={(e) => setColor(e.target.value)}
        id="color"
        type="color"
      />
    </Label>
    </>
  )
}
Color.displayName = "Color"

export { Color }
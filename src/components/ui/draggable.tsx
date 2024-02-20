import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Label } from "./label";
import { Switch } from "./switch";

const Circle = () => (
  <span className="h-1 w-1 rounded-full bg-primary"></span>
)

const CircleGroup = () => (
  <div className="flex gap-1 h-full cursor-grab">
    <div className="flex flex-col gap-1 h-full">
      <Circle />
      <Circle />
      <Circle />
    </div>
    <div className="flex flex-col gap-1 h-full">
      <Circle />
      <Circle />
      <Circle />
    </div>
  </div>
)

export interface DraggableItemProps extends ComponentPropsWithoutRef<'div'> {
  itemName: string;
  children: ReactNode;
  disabled?: boolean;
}

const DraggableItem = ({ itemName, children, disabled }:DraggableItemProps) => {
  return(
    <div className={`flex justify-between items-center p-4 rounded-ui border border-black/10 bg-white min-w-60 ${ disabled ? "opacity-50 pointer-events-none" : ""}`} draggable>
      <div className="flex items-center gap-4 w-full">
        <CircleGroup />
        <Label className="cursor-pointer w-full" htmlFor={itemName}>{children}</Label>
      </div>
      <Switch id={itemName} />
    </div>
  )
}

DraggableItem.displayName = 'DraggableItem';

export { DraggableItem };

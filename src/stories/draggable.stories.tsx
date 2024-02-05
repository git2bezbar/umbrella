import { DraggableItem } from "@/components/ui/draggable";

export default { title: 'Draggable' };

export const Basic = () => (
  <div className="flex justify-center items-center gap-4">
    <DraggableItem />
  </div>
);

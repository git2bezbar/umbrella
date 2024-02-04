import { Color } from "@/components/ui/color";

export default { title: 'Color' };

export const Basic = () => (
  <div className="flex justify-center items-center gap-4">
    <Color currentColor="#6624FF"/>
  </div>
);

export const Disabled = () => (
  <div className="flex justify-center items-center gap-4">
    <Color disabled currentColor="#24FF96"/>
  </div>
);

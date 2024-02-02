import { Input } from "@/components/ui/input";

export default { title: 'Input' };

export const Basic = () => (
  <div className="flex justify-center items-center gap-4">
    <Input />
  </div>
);

export const WithPlaceholder = () => (
  <div className="flex justify-center items-center gap-4">
    <Input placeholder="Umbrella UI" />
  </div>
);

export const Disabled = () => (
  <div className="flex justify-center items-center gap-4">
    <Input disabled placeholder="Umbrella UI" />
  </div>
);

export const File = () => (
  <div className="flex justify-center items-center gap-4">
    <Input type="file" placeholder="Umbrella UI" />
  </div>
);

export const FileDisabled = () => (
  <div className="flex justify-center items-center gap-4">
    <Input disabled type="file" placeholder="Umbrella UI" />
  </div>
);

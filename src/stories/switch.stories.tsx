import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default { title: 'Switch' };

export const Basic = () => (
  <div className="flex justify-center items-center gap-4">
    <Switch id="monday" />
    <Label htmlFor="monday">Monday</Label>
  </div>
);

export const Checked = () => (
  <div className="flex justify-center items-center gap-4">
    <Switch id="monday" checked/>
    <Label htmlFor="monday">Monday</Label>
  </div>
);

export const Disabled = () => (
  <div className="flex justify-center items-center gap-4">
    <Switch id="monday" disabled/>
    <Label htmlFor="monday">Monday</Label>
  </div>
);

export const CheckedDisabled = () => (
  <div className="flex justify-center items-center gap-4">
    <Switch id="monday" disabled checked/>
    <Label htmlFor="monday">Monday</Label>
  </div>
);


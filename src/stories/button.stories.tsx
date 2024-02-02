import { Button } from "@/components/ui/button";

export default { title: 'Button' };

export const Basic = () => (
  <div className="flex justify-center items-center gap-8">
    <Button>Umbrella UI</Button>
  </div>
);

export const BasicDisabled = () => (
  <div className="flex justify-center items-center gap-8">
    <Button disabled>Umbrella UI</Button>
  </div>
);

export const Subtle = () => (
  <div className="flex justify-center items-center gap-8">
    <Button variant="subtle">Umbrella UI</Button>
  </div>
);

export const SubtleDisabled = () => (
  <div className="flex justify-center items-center gap-8">
    <Button variant="subtle" disabled>Umbrella UI</Button>
  </div>
);

import { Button } from "@/components/ui/button";

export default { title: 'Button' };

export const Basic = () => (
  <div className="flex justify-center items-center gap-8 w-[300px]">
    <Button>Umbrella UI</Button>
  </div>
);

export const BasicDisabled = () => (
  <div className="flex justify-center items-center gap-8 w-[300px]">
    <Button disabled>Umbrella UI</Button>
  </div>
);

export const Subtle = () => (
  <div className="flex justify-center items-center gap-8 w-[300px]">
    <Button variant="subtle">Umbrella UI</Button>
  </div>
);

export const SubtleDisabled = () => (
  <div className="flex justify-center items-center gap-8 w-[300px]">
    <Button variant="subtle" disabled>Umbrella UI</Button>
  </div>
);

export const BasicFullWidth = () => (
  <div className="flex justify-center items-center gap-8 w-[300px]">
    <Button size="fullWidth">Umbrella UI</Button>
  </div>
);

export const BasicDisabledFullWidth = () => (
  <div className="flex justify-center items-center gap-8 w-[300px]">
    <Button size="fullWidth" disabled>Umbrella UI</Button>
  </div>
);

export const SubtleFullWidth = () => (
  <div className="flex justify-center items-center gap-8 w-[300px]">
    <Button variant="subtle" size="fullWidth">Umbrella UI</Button>
  </div>
);

export const SubtleDisabledFullWidth = () => (
  <div className="flex justify-center items-center gap-8 w-[300px]">
    <Button variant="subtle" size="fullWidth" disabled>Umbrella UI</Button>
  </div>
);

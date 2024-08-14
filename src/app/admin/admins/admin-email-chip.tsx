"use client";

import { Chip } from "@nextui-org/chip";

interface AdminChipProps {
  email: string;
  id: string;
  onRemove: (id: string) => void;
}

const AdminEmailChip = ({ email, id, onRemove }: AdminChipProps) => {
  return (
    <Chip key={email} onClose={() => onRemove(id)}>
      {email}
    </Chip>
  );
};

export default AdminEmailChip;
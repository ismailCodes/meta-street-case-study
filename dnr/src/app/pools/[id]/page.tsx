import { BaseModal } from "@/components/BaseModal";
import { TickModal } from "@/components/TickModal";
import { TicksByPool } from "@/components/TicksByPool";

type Props = {
  searchParams: Record<string, string> | null | undefined;
  params: {
    id: string;
  };
};

export default async function Pools({ params, searchParams }: Props) {
  const tickId = searchParams?.tickId;

  return (
    <>
      {tickId && <TickModal poolId={params.id} tickId={tickId} />}
      <TicksByPool poolId={params.id} />
    </>
  );
}

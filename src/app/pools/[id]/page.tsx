import { TickModal } from "@/components/TickModal";
import { TicksByPool } from "@/components/TicksByPool";

interface PoolsPageProps {
  searchParams: Record<string, string> | null | undefined;
  params: {
    id: string;
  };
}

export default async function Pools({ params, searchParams }: PoolsPageProps) {
  const tickId = searchParams?.tickId;

  return (
    <>
      {tickId && <TickModal poolId={params.id} tickId={tickId} />}
      <TicksByPool poolId={params.id} />
    </>
  );
}

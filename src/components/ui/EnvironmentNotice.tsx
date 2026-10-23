/** Exclusivo do build de homologação; não sobrepõe menu, cenas ou fotografias. */
export function EnvironmentNotice() {
  if (!import.meta.env.FAUNA_HOMOLOGATION) return null;

  return (
    <aside
      aria-label="Identificação do ambiente"
      data-environment="homologacao"
      className="border-t border-[#C9A44C]/30 bg-[#F4EEE3] px-5 py-3 text-center text-xs leading-relaxed text-[#57685F]"
    >
      Ambiente de homologação — Conteúdo sujeito à validação institucional.
    </aside>
  );
}
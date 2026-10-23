import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BARCARENA_COURSES } from '../../data/barcarenaCourses';
import { HOMEPAGE_MEDIA } from '../../data/homepageMedia';
import { InstitutionalImage } from '../ui/InstitutionalImage';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { gsap } from '../../utils/motionConfig';

const courseImages = {
  direito: HOMEPAGE_MEDIA.direito,
  enfermagem: HOMEPAGE_MEDIA.enfermagem,
  psicologia: HOMEPAGE_MEDIA.psicologia,
};

export function InstitutionalContinuation() {
  const rootRef = useRef<HTMLDivElement>(null);
  useGSAPScene(() => {
    const scope = rootRef.current;
    if (!scope) return;
    scope.querySelectorAll<HTMLElement>('.course-visual').forEach((frame) => {
      const photo = frame.querySelector('img');
      if (!photo) return;
      gsap.fromTo(photo, { yPercent: -3, scale: 1.08 }, {
        yPercent: 3, ease: 'none',
        scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 0.45 },
      });
    });
  }, rootRef);

  return (
    <div ref={rootRef} className="institutional-continuation institutional-experience">
      <section className="institutional-signature" aria-labelledby="signature-title">
        <figure>
          <InstitutionalImage media={HOMEPAGE_MEDIA.facade} sizes="(max-width: 899px) 100vw, 52vw" />
          <figcaption>Fachada FAUNA · Imagem editada a partir de fotografia real.</figcaption>
        </figure>
        <div className="institutional-signature-copy">
          <p className="editorial-label">Conhecimento. Proximidade. Trajetórias.</p>
          <h2 id="signature-title">FAUNA</h2>
          <p className="signature-boutique">A Faculdade Boutique</p>
          <p className="signature-support">Uma formação que valoriza o conhecimento, a proximidade e o desenvolvimento de cada trajetória.</p>
          <Link className="editorial-link" to="/institucional">Conheça a instituição <ArrowUpRight size={17} strokeWidth={1.25} aria-hidden="true" /></Link>
        </div>
      </section>

      <section id="formacao" className="institutional-formation" aria-labelledby="formation-title">
        <div className="institutional-formation-intro">
          <p className="editorial-label">Graduação · Barcarena</p>
          <h2 id="formation-title">A sua trajetória<br />começa <em>aqui.</em></h2>
          <p>Direito, Enfermagem e Psicologia. Cursos apresentados para Barcarena, com informações acadêmicas e condições de oferta sujeitas à validação institucional.</p>
        </div>
        <div className="institutional-course-stories">
          {BARCARENA_COURSES.map((course) => (
            <article key={course.id} className={`institutional-course course-${course.id}`} aria-labelledby={`course-title-${course.id}`}>
              <figure className="course-visual">
                <InstitutionalImage media={courseImages[course.id]} sizes="(max-width: 899px) 100vw, 62vw" />
                <figcaption>Ilustração conceitual · IA</figcaption>
              </figure>
              <div className="institutional-course-copy">
                <p className="editorial-label">{course.area}</p>
                <h3 id={`course-title-${course.id}`}>{course.name}</h3>
                <p>{course.editorial.summary}</p>
                <Link className="editorial-link" to={`/cursos/${course.slug}`} aria-label={`Conheça o curso de ${course.name}`}>
                  Conheça o curso <ArrowUpRight size={18} strokeWidth={1.25} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="institutional-invitation" aria-labelledby="invitation-title">
        <p className="editorial-label">Conhecimento que encontra propósito.</p>
        <h2 id="invitation-title">Aqui não diplomamos pessoas.<br /><em>Formamos profissionais.</em></h2>
        <div className="institutional-invitation-bottom">
          <p>Proposta editorial sujeita à validação institucional.</p>
          <Link className="editorial-link" to="/como-ingressar">Descubra os caminhos de ingresso <ArrowUpRight size={18} strokeWidth={1.25} aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
}

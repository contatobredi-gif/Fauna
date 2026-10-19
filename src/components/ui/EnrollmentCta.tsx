import React from 'react';
import { getEnrollmentUrl, type EnrollmentKind } from '../../config/externalLinks';

interface Props {
  kind?: EnrollmentKind;
  courseId?: string;
  className?: string;
  children: React.ReactNode;
}

export const EnrollmentCta: React.FC<Props> = ({
  kind = 'general',
  courseId,
  className = '',
  children,
}) => {
  const url = getEnrollmentUrl({ kind, courseId });

  if (!url) {
    return (
      <span
        className={`${className} cursor-not-allowed opacity-80`}
        role="note"
        aria-disabled="true"
        title="O link oficial de inscrição ainda não foi publicado."
        data-cta="enrollment-unavailable"
        data-cta-kind={kind}
      >
        <span className="block">{children}</span>
        <span className="block text-[10px] font-medium tracking-wide opacity-80 mt-1">
          Inscrição em breve
        </span>
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-cta="enrollment"
      data-cta-kind={kind}
      data-course-id={courseId || undefined}
    >
      {children}
    </a>
  );
};

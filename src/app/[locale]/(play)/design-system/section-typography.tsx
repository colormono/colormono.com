import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";

export default function SectionTypography() {
  return (
    <section id="typography">
      <Text variant="overline">Typography</Text>
      <Text variant="lead">
        Typography creates purposeful texture, guiding users to read and
        understand the hierarchy of information. The right typographic treatment
        and the controlled usage of type styles helps manage the display of
        content, keeping it useful, simple, and effective.
        <a
          href="https://carbondesignsystem.com/guidelines/typography/overview/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          *
        </a>
      </Text>

      <ul className="mt-16 divide-y border-y">
        <Li>
          <Badge variant="neutral">h1</Badge>
          <Text variant="h1">God is in the kerning.</Text>
        </Li>
        <Li>
          <Badge variant="neutral">h2</Badge>
          <Text variant="h2">Mi vieja crió un idiota de corazón lunático.</Text>
        </Li>
        <Li>
          <Badge variant="neutral">h3</Badge>
          <Text variant="h3">
            Siempre seguí la misma dirección, la difícil, la que usa el salmón.
          </Text>
        </Li>
        <Li>
          <Badge variant="neutral">lead</Badge>
          <Text variant="lead">Si es rápido y gratis… Why not?</Text>
        </Li>
        <Li>
          <Badge variant="neutral">body</Badge>
          <Text variant="body">
            Tengo un montón de cosas en contra de la televisión, que van desde
            las ondas alfa, a los mecanismos en donde el mensaje se transforma
            en esa misma cosa. Pero no soy tan imbécil como para pretender
            apagar la televisión. Carlos Alberto Solari.
          </Text>
        </Li>
        <Li>
          <Badge variant="neutral">small</Badge>
          <Text variant="small">
            Este mundo, esta empresa, este mundo de hoy que te esnifa la cabeza
            una y otra vez en una línea y otra línea y otra línea más. Voy
            cumpliendo como puedo... Yo trabajo acá!
          </Text>
        </Li>
        <Li>
          <Badge variant="neutral">caption</Badge>
          <Text variant="caption">
            Tu negocio es muy difícil de explicar y fácil de enseñar.
          </Text>
        </Li>
        <Li>
          <Badge variant="neutral">overline</Badge>
          <Text variant="overline">Violencia es mentir</Text>
        </Li>
      </ul>
    </section>
  );
}

const Li = ({ ...props }) => (
  <li
    className="flex flex-col items-start gap-5 py-8 md:flex-row-reverse md:items-center md:justify-between md:gap-12"
    {...props}
  />
);

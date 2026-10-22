type THeading = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export interface TitleProps extends THeading {
  /**
   * Контент title.
   */
  children: React.ReactNode;
  /**
   * Тип title, по умолчанию h2.
   */
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Размер шрифта title, по умолчанию m(28/36).
   */
  size?: 'xs' | 's' | 'xm' | 'xl' | 'm' | 'l' | 'x';
  /**
   * Цвет title, по умолчанию primary(черный).
   */
  variant?: 'primary' | 'secondary';
  /**
   * Font-weight title, по умолчанию medium(500).
   */
  weight?: 'regulary' | 'medium' | 'semibold' | 'bold';
  /**
   * Кастомный класс для title.
   */
  className?: string;
}

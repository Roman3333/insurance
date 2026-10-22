export interface MetadataProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export interface PageParams {
  params: Promise<{
    id: string;
  }>;
}

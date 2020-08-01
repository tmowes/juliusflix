export interface InitialDataProps {
  id: number
  categoryTitle?: string
  link?: string
  color: string
  link_extra?: ExtraLinkProps
  videos: VideosProps[]
}
export interface ExtraLinkProps {
  text: string
  url: string
}
export interface VideosProps {
  videoTitle: string
  url: string
}

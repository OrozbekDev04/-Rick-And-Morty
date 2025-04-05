import { Character } from "@/shared/types";

export interface SearchBarProps {
  onSearch: (characters: Character[]) => void;
}
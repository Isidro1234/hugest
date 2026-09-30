import { Pressable, ScrollView, Text } from 'react-native';

type TagListProps = {
  tags: string[];
  selected?: string;
  onSelect?: (tag: string) => void;
};

export default function TagList({ tags, selected, onSelect }: TagListProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      // padding + gap live on the inner container so the first/last tags don't touch the screen edge
      contentContainerClassName="px-1 gap-2 items-center"
      className="flex-grow-0"
    >
      {tags.map((tag) => {
        const active = tag === selected;
        return (
          <Pressable
            key={tag}
            onPress={() => onSelect?.(tag)}
            className={`rounded-full ml-3 px-4 py-2 ${active ? 'bg-[#6B4226]' : 'bg-[#f5f5f5]'}`}
          >
            <Text className={`text-sm font-medium ${active ? 'text-white' : 'text-[#9b9b9b]'}`}>
              {tag}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

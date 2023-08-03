import {DiaryWriteButton} from '@/components/core/DiaryWriteButton';
import {useDiaryApiSpecGetDiary} from '@/orval/api/diary/diary';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {DiaryItem} from './_components/DiaryItem';

const Diary = () => {
  const diaryListStatus = useDiaryApiSpecGetDiary({
    page: 1,
    size: 10,
  });

  const diaryList = diaryListStatus.data?.data.items;

  console.log(diaryList);
  const ItemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <View style={styles.container}>
      <View style={styles.diaryListView}>
        <FlatList
          data={diaryList}
          renderItem={({item}) => <DiaryItem diaryItem={item} />}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
      <DiaryWriteButton />
    </View>
  );
};

export default Diary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  diaryListView: {
    paddingHorizontal: 12,
  },
  itemSeparator: {
    height: 10, // Set the desired spacing between items here
  },
});
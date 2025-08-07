import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerFormHelp: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 25,
    paddingVertical: 100,
    width: '100%',
  },
  textLabel: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'white',
    marginBottom: 5
  },
  input: {
    backgroundColor: 'black',
    borderBottomColor: 'orange',
    borderBottomWidth: 3,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    color: 'white'
  },
  inputMultilines: {
    height:80,
    textAlignVertical: 'top'
  }
});
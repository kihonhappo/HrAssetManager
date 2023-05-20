/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState, useEffect} from 'react';
import SQLite from 'react-native-sqlite-storage';
import SelectDropdown from 'react-native-select-dropdown';

import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  List,
  SelectList,
  Asset,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from './src/components/';

const tasklists = ['Yard','New Years','Robots', 'Graduation'];

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type MyComponent = PropsWithChildren<{
  title: string;
}>;

function MyComponent({title}: MyComponent): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text>{title}</Text>
    </View>
  );
}

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const db = SQLite.openDatabase('assets.db');
  const [isLoading, setIsLoading] = useState(true);
  const [newAsset, setNewAsset] = useState(false);
  const [newManager, setNewManager] = useState(false);
  const [newTaskList, setNewTaskList] = useState(false);
  const [newTask, setNewTask] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser = {
      userid: 0,
      firstName: '',
      lastName: '',
      email: '',
      cellPhone: '',
      type: '',
    }, setCurrentUser] = useState(undefined);
  const [newUser, setNewUser] = useState({});

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (userid INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName TEXT, email TEXT, cellPhone TEXT, type INTEGER)',
      );
    });

    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users', null,
        (txObj, resultSet) => setUsers(resultSet.rows._array),
        (txObj, error) => console.log(error),
      );
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
        >
          <Header />
          <Section title="Loading ...." />
        </ScrollView>
      </SafeAreaView>
    );
  }

  const showUsers = () => {
    return users.map((user, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text>{user.firstName + ' ' + user.lastName}</Text>
        </View>
      );
    });
  };

  const addAsset = () => {
    
    //Alert.alert('add Asset');
    setNewAsset(false);
   /* db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (user) values (?)',
        [currentUser],
        (txObj, resultSet) => {
          let existingUsers = [...users];
          existingUsers.push({userid: resultSet.insertId, firstName: currentUser.firstName, lastName: currentUser.lastName, email: currentUser.email, cellPhone: currentUser.cellPhone, type: currentUser.type});
          setUsers(existingUsers);
        },
      );
    }); */
  };

  const addManager = () => {
    setNewManager(false);
  };

  const addTaskList = () => {
    setNewTaskList(false);
  };

  const addTask = () => {
    setNewTask(false);
  };

  const changeTxt = () => {
    Alert.alert('ChangeTxt: ');
   // switch (ele) {
      //case 'newUser':
       // setNewUser.firstName = 'Aaron';
        //break;
    //}
  };

  if (newAsset === true) {
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
        >
          <Header />
          <Section title="Step One">
            Create <Text style={styles.highlight}>Asset</Text>. This is the
            person that will be performing the tasks.
          </Section>
          <Asset />
          <View>
            <TextInput onChangeText={setNewUser} placeholder="First Name" />
            <TextInput placeholder="Last Name" />
            <TextInput placeholder="Email" />
            <TextInput placeholder="Cell Phone" />
            <TextInput value="1" placeholder="Type" />
            <Button title="Add Asset" onPress={addAsset} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if (newManager === true) {
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
        >
          <Header />
          <Section title="Step Two">
            Create <Text style={styles.highlight}>Manager</Text>. This is the
            person that the asset will be accountable to.
          </Section>
          <View>
            <TextInput placeholder="First Name" />
            <TextInput placeholder="Last Name" />
            <TextInput placeholder="Email" />
            <TextInput placeholder="Cell Phone" />
            <TextInput value="2" placeholder="Type" />
            <Button title="Add Asset" onPress={addManager} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if (newTaskList === true) {
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
        >
          <Header />
          <Section title="Step Three">
            Create <Text style={styles.highlight}>Task List</Text>. This is a
            list of tasks that the asset will work to complete.
          </Section>
          <View>
            <TextInput placeholder="Title" />
            <TextInput placeholder="Desc" />
            <TextInput placeholder="Start Date" />
            <TextInput placeholder="Completed Date" />
            <TextInput placeholder="Status" />
            <TextInput placeholder="Tasks" />
            <Button title="Add TaskList" onPress={addTaskList} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if (newTask === true) {
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
        >
          <Header />
          <Section title="Step Three">
            Create <Text style={styles.highlight}>Task</Text>. This is a new
            task that will be added to an existing Task List.
          </Section>
          <View>
            <TextInput placeholder="Title" />
            <SelectDropdown
              data={tasklists}
              onSelect={(selectedItem, index) => {
                Alert.alert(
                  'Selected Item: ' + selectedItem + ', Index: ' + index,
                );
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
            <TextInput placeholder="Desc" />
            <TextInput placeholder="Start Date" />
            <TextInput placeholder="Completed Date" />
            <TextInput placeholder="Status" />
            <TextInput placeholder="Work performed" />
            <Button title="Add Task" onPress={addTask} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="Step One">
            Create <Text style={styles.highlight}>Asset (Main user)</Text>. This
            is the person (you?) that will be performing tasks.
            <Button title="Add Asset" onPress={() => setNewAsset(true)} />
          </Section>
          <Section title="Step Two">
            Create <Text style={styles.highlight}>Manager</Text>. This is the
            person that the asset will be accountable to.
            <Button title="Add Manager" onPress={() => setNewManager(true)} />
          </Section>
          <Section title="Step Three">
            Create <Text style={styles.highlight}>New Task List</Text>. This is
            a new Task List to hold new tasks (Yippy!).
            <Button
              title="Add Task List"
              onPress={() => setNewTaskList(true)}
            />
          </Section>
          <Section title="Step Four">
            Create <Text style={styles.highlight}>New Task</Text>. This is a new
            Task to add to a Task List (Yippy!).
            <Button title="Add Task" onPress={() => setNewTask(true)} />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 8,
  },
});

export default App;

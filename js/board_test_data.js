let tasks = [
    {
      id: 0,
      status: "to-do",
      category: "User Story",
      category_color: 11, 
      title: "Kochwelt Page & Recipe Recommender",
      description: "Build start page with recipe recommendation...",
      due_date: "2023-09-03",
      priority: 2,
      assigned_to: [1,2,4,5,6,7,8,9,12], // to contacts
      subtasks: [
        {
          done: true,
          subtask: "Implement Recipe Recommendation",
        },
        {
          done: false,
          subtask: "Start Page Layout",
        },
        {
          done: false,
          subtask: "Do something",
        },
        {
          done: false,
          subtask: "Do something else",
        },
        {
          done: false,
          subtask: "...",
        },
      ],
    },
    {
      id: 1,
      status: "await-feedback",
      category: "Technical Task",
      category_color: 6,
      title: "CSS Architecture Planning",
      description: "Define CSS naming conventions and structure.",
      due_date: "2023-09-15",
      priority: 1,
      assigned_to: [2,3],
      subtasks: [
        {
          done: true,
          subtask: "Establish CSS Methodology",
        },
        {
          done: true,
          subtask: "Setup Base Styles",
        },
      ],
    },
    {
      id: 2,
      status: "await-feedback",
      category: "Technical Task",
      category_color: 5,
      title: "CSS Architecture Planning",
      description: "Define CSS naming conventions and structure.",
      due_date: "2023-09-15",
      priority: 1,
      assigned_to: [2,3],
      subtasks: [
        {
          done: true,
          subtask: "Establish CSS Methodology",
        },
        {
          done: true,
          subtask: "Setup Base Styles",
        },
      ],
    },
  ];
  
  let users = [
      {
          'id' : 1,
          'name' : 'Emanuel Müller',
          'initials' : 'EM',
          'email' : 'emanuelmüller@gmail.de',
          'password' : '!P3Lm?',
          'phone' : '0123456789',
          'badge-color' : 11,
          'contacts' : [2]
      },
      {
          'id' : 2,
          'name' : 'Manuel Bauer',
          'initials' : 'MB',
          'email' : 'manuelbauer@gmail.de',
          'password' : 'passwort',
          'phone' : '0123456788',
          'badge-color' : 6,
          'contacts' : [1,2]
      },
      {
          'id' : 3,
          'name' : 'Anna Mayer',
          'initials' : 'AM',
          'email' : 'annamayer@gmail.de',
          'password' : 'Passwort',
          'phone' : '0123456787',
          'badge-color' : 9,
          'contacts' : [1,2,3]
      },
      {
          'id' : 4,
          'name' : 'Joachim Baum',
          'initials' : 'JM',
          'email' : 'jb@gmail.de',
          'password' : 'Passwort',
          'phone' : '0123466787',
          'badge-color' : 7,
          'contacts' : [1,5,3]
      },
      {
          'id' : 5,
          'name' : 'Sarah Blume',
          'initials' : 'SB',
          'email' : 'sb@gmail.de',
          'password' : 'Passwort',
          'phone' : '0123454787',
          'badge-color' : 12,
          'contacts' : [1,4,3]
      },
      {
          'id' : 6,
          'name' : 'Benjamin Blümchen',
          'initials' : 'BB',
          'email' : 'bb@gmail.de',
          'password' : 'Passwort',
          'phone' : '0122354787',
          'badge-color' : 15,
          'contacts' : [1,4,3]
      },
      {
          'id' : 7,
          'name' : 'Niklas Nickel',
          'initials' : 'NN',
          'email' : 'nn@gmail.de',
          'password' : 'Passwort',
          'phone' : '2223454787',
          'badge-color' : 5,
          'contacts' : [1,4,3]
      },
      {
          'id' : 8,
          'name' : 'Fernando Garcia',
          'initials' : 'FG',
          'email' : 'fg@gmail.de',
          'password' : 'Passwort',
          'phone' : '0523454787',
          'badge-color' : 1,
          'contacts' : [1,4,3]
      },
      {
          'id' : 9,
          'name' : 'Tobias Schmidt',
          'initials' : 'TS',
          'email' : 'ts@gmail.de',
          'password' : 'Passwort',
          'phone' : '0127454787',
          'badge-color' : 3,
          'contacts' : [1,4,3]
      },
  ]
  
  let contacts = [
    {
        'id' : 1,
        'name' : 'Emanuel Müller',
        'initials' : 'EM',
        'email' : 'emanuelmüller@gmail.de',
        'phone' : '0123456789',
        'badge-color' : 11,
        'userid' : 1,
    },
    {
        'id' : 2,
        'name' : 'Manuel Bauer',
        'initials' : 'MB',
        'email' : 'manuelbauer@gmail.de',
        'phone' : '0123456788',
        'badge-color' : 6,
        'userid' : 2,
    },
    {
        'id' : 3,
        'name' : 'Anna Mayer',
        'initials' : 'AM',
        'email' : 'annamayer@gmail.de',
        'phone' : '0123456787',
        'badge-color' : 9,
        'userid' : 3,
    },
    {
        'id' : 4,
        'name' : 'Joachim Baum',
        'initials' : 'JM',
        'email' : 'jb@gmail.de',
        'phone' : '0123466787',
        'badge-color' : 7,
        'userid' : 4,
    },
    {
        'id' : 5,
        'name' : 'Sarah Blume',
        'initials' : 'SB',
        'email' : 'sb@gmail.de',
        'phone' : '0123454787',
        'badge-color' : 12,
        'userid' : 5,
    },
    {
        'id' : 6,
        'name' : 'Benjamin Blümchen',
        'initials' : 'BB',
        'email' : 'bb@gmail.de',
        'phone' : '0122354787',
        'badge-color' : 15,
        'userid' : 6,
    },
    {
        'id' : 7,
        'name' : 'Niklas Nickel',
        'initials' : 'NN',
        'email' : 'nn@gmail.de',
        'phone' : '2223454787',
        'badge-color' : 5,
        'userid' : 7,
    },
    {
        'id' : 8,
        'name' : 'Fernando Garcia',
        'initials' : 'FG',
        'email' : 'fg@gmail.de',
        'phone' : '0523454787',
        'badge-color' : 1,
        'userid' : 8,
    },
    {
        'id' : 9,
        'name' : 'Tobias Schmidt',
        'initials' : 'TS',
        'email' : 'ts@gmail.de',
        'phone' : '0127454787',
        'badge-color' : 3,
        'userid' : 9,
    },
    {
        'id' : 10,
        'name' : 'Tina Meier',
        'initials' : 'TM',
        'email' : 'tinameier@gmail.de',
        'phone' : '0839920239',
        'badge-color' : 3,
        'userid' : -1, // Contacts that have no JOIN Account
    },{
        'id' : 11,
        'name' : 'Alex Schmidt',
        'initials' : 'AS',
        'email' : 'alexschmidt@gmail.de',
        'phone' : '0173902384',
        'badge-color' : 4,
        'userid' : -1,
    },
    {
        'id' : 12,
        'name' : 'Sina Reuter',
        'initials' : 'SR',
        'email' : 'sindreuter@gmail.de',
        'phone' : '0190234312',
        'badge-color' : 5,
        'userid' : -1,
    }
  ]
  
  let currentUser = 
    {
      'id' : 1,
      'name' : 'Emanuel Müller',
      'initials' : 'EM',
      'email' : 'emanuelmüller@gmail.de',
      'password' : '!P3Lm?',
      'phone' : '0123456789',
      'badge-color' : 11,
      'contacts' : [2]
    }
  ;
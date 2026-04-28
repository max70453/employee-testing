// ==================== DATA LAYER ====================
var DB = {
    get: function(key, defaultValue) {
        defaultValue = defaultValue || null;
        var data = localStorage.getItem('wt_' + key);
        return data ? JSON.parse(data) : defaultValue;
    },
    set: function(key, value) {
        localStorage.setItem('wt_' + key, JSON.stringify(value));
    },
    init: function() {
        if (!this.get('users')) this.set('users', []);
        if (!this.get('tests')) this.set('tests', []);
        if (!this.get('questions')) this.set('questions', []);
        if (!this.get('results')) this.set('results', []);
        if (!this.get('assignments')) this.set('assignments', []);
    }
};

function seedData() {
    if (!DB.get('users') || DB.get('users').length === 0) {
        DB.set('users', [
            { id: '1', name: 'Administrator', email: 'admin@water.local', password: '123456', role: 'admin', department: 'IT', position: 'System admin', active: true },
            { id: 'u1', name: 'Иванов Иван', email: 'ivanov@water.local', password: '123456', role: 'employee', department: 'Водоснабжение', position: 'Слесарь', active: true },
            { id: 'u2', name: 'Петрова Анна', email: 'petrova@water.local', password: '123456', role: 'employee', department: 'Канализация', position: 'Инженер', active: true },
            { id: 'u3', name: 'Сидоров Алексей', email: 'sidorov@water.local', password: '123456', role: 'employee', department: 'Водоснабжение', position: 'Мастер', active: true },
            { id: 'u4', name: 'Смирнова Ольга', email: 'smirnova@water.local', password: '123456', role: 'employee', department: 'Лаборатория', position: 'Химик', active: true },
            { id: 'u5', name: 'Кузнецов Сергей', email: 'kuznetsov@water.local', password: '123456', role: 'employee', department: 'Ремонт', position: 'Сварщик', active: true }
        ]);
    }
    
    if (!DB.get('tests') || DB.get('tests').length === 0) {
        var tests = [
            { id: 't1', title: 'ОТ и ТБ', description: 'Тест по охране труда и технике безопасности', category: 'OT TB', timeLimit: 30, published: true, createdAt: new Date().toISOString() },
            { id: 't2', title: 'Пожарная безопасность', description: 'Тест по пожарной безопасности', category: 'Fire', timeLimit: 20, published: true, createdAt: new Date().toISOString() },
            { id: 't3', title: 'Первая помощь', description: 'Тест по оказанию первой помощи', category: 'First aid', timeLimit: 25, published: true, createdAt: new Date().toISOString() }
        ];
        DB.set('tests', tests);
        
        var questions = [
            { id: 'q1', testId: 't1', text: 'Что делать при обнаружении протечки воды?', type: 'single', options: ['Сообщить', 'Игнорировать', 'Уйти'], correctAnswer: 0 },
            { id: 'q2', testId: 't1', text: 'Какой документ регламентирует охрану труда?', type: 'single', options: ['Трудовой кодекс', 'Правила по охране труда', 'Инструкция'], correctAnswer: 1 },
            { id: 'q3', testId: 't1', text: 'Как часто проводится инструктаж?', type: 'single', options: ['Ежедневно', 'Раз в полгода', 'Раз в год'], correctAnswer: 1 },
            { id: 'q4', testId: 't1', text: 'Какие СИЗ нужны?', type: 'single', options: ['Перчатки', 'Респиратор', 'Все перечисленные'], correctAnswer: 2 },
            { id: 'q5', testId: 't1', text: 'Что делать при травме?', type: 'single', options: ['Оказать помощь', 'Сообщить руководителю', 'Вызвать скорую'], correctAnswer: 1 },
            { id: 'q6', testId: 't1', text: 'Можно ли работать без страховки?', type: 'single', options: ['Да', 'Нет', 'С разрешения'], correctAnswer: 1 },
            { id: 'q7', testId: 't1', text: 'Цвет сигнальной одежды?', type: 'single', options: ['Оранжевый', 'Зеленый', 'Синий'], correctAnswer: 0 },
            { id: 'q8', testId: 't1', text: 'Что такое ПТБ?', type: 'single', options: ['Правила техники безопасности', 'Техника безопасности', 'Трудовые правила'], correctAnswer: 0 },
            { id: 'q9', testId: 't1', text: 'Можно ли курить на рабочем месте?', type: 'single', options: ['Нет', 'Только в специальных местах', 'Можно'], correctAnswer: 1 },
            { id: 'q10', testId: 't1', text: 'Обязан ли работник проходить медосмотр?', type: 'single', options: ['Нет', 'Да', 'Только при травме'], correctAnswer: 1 },
            
            { id: 'q11', testId: 't2', text: 'Какой номер пожарной охраны?', type: 'single', options: ['101', '102', '103'], correctAnswer: 0 },
            { id: 'q12', testId: 't2', text: 'Каким огнетушителем тушат электроприборы?', type: 'single', options: ['Водным', 'Пенным', 'Углекислотным'], correctAnswer: 2 },
            { id: 'q13', testId: 't2', text: 'Что делать при возгорании?', type: 'single', options: ['Тушить', 'Позвонить 101 и эвакуироваться', 'Ждать'], correctAnswer: 1 },
            { id: 'q14', testId: 't2', text: 'Где хранится огнетушитель?', type: 'single', options: ['Под столом', 'На видном месте', 'В сейфе'], correctAnswer: 1 },
            { id: 'q15', testId: 't2', text: 'Как действовать при эвакуации?', type: 'single', options: ['Бежать', 'Идти по плану', 'Прятаться'], correctAnswer: 1 },
            { id: 'q16', testId: 't2', text: 'Можно ли использовать лифт?', type: 'single', options: ['Да', 'Нет', 'Только грузовой'], correctAnswer: 1 },
            { id: 'q17', testId: 't2', text: 'Что такое план эвакуации?', type: 'single', options: ['Схема выходов', 'Список работников', 'Инструкция'], correctAnswer: 0 },
            { id: 'q18', testId: 't2', text: 'Как часто проверяют огнетушители?', type: 'single', options: ['Раз в год', 'Раз в месяц', 'Раз в 10 лет'], correctAnswer: 0 },
            { id: 'q19', testId: 't2', text: 'Температура самовоспламенения?', type: 'single', options: ['Высокая', 'Низкая', 'Нет такой'], correctAnswer: 2 },
            { id: 'q20', testId: 't2', text: 'Что такое пожарный кран?', type: 'single', options: ['Оборудование', 'Водопроводный кран', 'Аварийный выход'], correctAnswer: 0 },
            
            { id: 'q21', testId: 't3', text: 'Какой номер скорой помощи?', type: 'single', options: ['101', '102', '103'], correctAnswer: 2 },
            { id: 'q22', testId: 't3', text: 'Что делать при переломе?', type: 'single', options: ['Вправить', 'Обеспечить неподвижность', 'Мазать мазью'], correctAnswer: 1 },
            { id: 'q23', testId: 't3', text: 'Как остановить кровотечение?', type: 'single', options: ['Приложить лед', 'Наложить повязку', 'Пить таблетки'], correctAnswer: 1 },
            { id: 'q24', testId: 't3', text: 'Что такое искусственное дыхание?', type: 'single', options: ['Вдох через рот', 'Массаж сердца', 'Гимнастика'], correctAnswer: 0 },
            { id: 'q25', testId: 't3', text: 'Как помочь при ожоге?', type: 'single', options: ['Смазать маслом', 'Приложить холод', 'Проколоть пузырь'], correctAnswer: 1 },
            { id: 'q26', testId: 't3', text: 'При удушье что делать?', type: 'single', options: ['Дать воды', 'Очистить пути', 'Уложить спать'], correctAnswer: 1 },
            { id: 'q27', testId: 't3', text: 'Что такое потеря сознания?', type: 'single', options: ['Сон', 'Отключение мозга', 'Голод'], correctAnswer: 1 },
            { id: 'q28', testId: 't3', text: 'Как помочь упавшему?', type: 'single', options: ['Поднять', 'Проверить пульс', 'Дать воды'], correctAnswer: 1 },
            { id: 'q29', testId: 't3', text: 'Что такое шина?', type: 'single', options: ['Устройство для фиксации', 'Лекарство', 'Бинт'], correctAnswer: 0 },
            { id: 'q30', testId: 't3', text: 'Сколько ребер у человека?', type: 'single', options: ['10', '12', '14'], correctAnswer: 1 }
        ];
        DB.set('questions', questions);
    }
    
    var users = DB.get('users', []);
    var tests = DB.get('tests', []);
    var assignments = DB.get('assignments', []);
    
    users.forEach(function(u) {
        if (u.role === 'employee') {
            tests.forEach(function(t) {
                var exists = assignments.some(function(a) { return a.testId === t.id && a.userId === u.id; });
                if (!exists) {
                    assignments.push({
                        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                        testId: t.id,
                        userId: u.id,
                        dueDate: '',
                        attempts: 1,
                        createdAt: new Date().toISOString()
                    });
                }
            });
        }
    });
    DB.set('assignments', assignments);
}

function getCurrentUser() {
    return DB.get('currentUser');
}

function saveCurrentUser(user) {
    if (user) DB.set('currentUser', user);
    else localStorage.removeItem('wt_currentUser');
}

function logout() {
    localStorage.removeItem('wt_currentUser');
    window.location.href = 'login.html';
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function escapeHtml(text) {
    if (!text) return '';
    var d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
}

function formatDate(ds) {
    return ds ? new Date(ds).toLocaleDateString('ru-RU') : '-';
}

function formatDateTime(ds) {
    return ds ? new Date(ds).toLocaleString('ru-RU') : '-';
}

function getGrade(p) {
    if (p >= 90) return { grade: '5', label: 'Отлично', class: 'excellent' };
    if (p >= 75) return { grade: '4', label: 'Хорошо', class: 'good' };
    if (p >= 60) return { grade: '3', label: 'Удовлетворительно', class: 'satisfactory' };
    return { grade: '2', label: 'Неудовлетворительно', class: 'failed' };
}

function register(data) {
    var users = DB.get('users', []);
    if (users.some(function(u) { return u.email === data.email; })) {
        return { success: false, error: 'Email already used' };
    }
    var u = { id: generateId(), name: data.name, email: data.email, password: data.password, role: 'employee', position: data.position || '', department: data.department || '', active: true, createdAt: new Date().toISOString() };
    users.push(u);
    DB.set('users', u);
    
    var tests = getTests({ published: true });
    tests.forEach(function(t) {
        assignTest({ testId: t.id, userId: u.id, dueDate: '', attempts: 1 });
    });
    
    return { success: true, user: u };
}

function login(email, password) {
    var users = DB.get('users') || [];
    if (!Array.isArray(users)) {
        users = [];
    }
    var u = users.find(function(x) { return x.email === email && x.password === password; });
    if (!u) return { success: false, error: 'Неверный email или пароль' };
    if (!u.active) return { success: false, error: 'Аккаунт заблокирован' };
    return { success: true, user: u };
}

function getUsers(f) {
    var u = DB.get('users') || [];
    if (!Array.isArray(u)) {
        u = [];
    }
    if (f && f.role) u = u.filter(function(x) { return x.role === f.role; });
    return u;
}

function updateUser(id, data) {
    var u = DB.get('users');
    var i = u.findIndex(function(x) { return x.id === id; });
    if (i >= 0) { u[i] = Object.assign({}, u[i], data); DB.set('users', u); }
}

function toggleUserStatus(id) {
    console.log('toggleUserStatus called with id:', id);
    var u = DB.get('users');
    var x = u.find(function(y) { return y.id === id; });
    if (x) { 
        x.active = !x.active; 
        DB.set('users', u);
        console.log('User now active:', x.active);
    }
}

function resetPassword(id) {
    var u = DB.get('users');
    var x = u.find(function(y) { return y.id === id; });
    if (x) { x.password = '123456'; DB.set('users', u); }
}

function deleteUser(id) {
    var u = DB.get('users').filter(function(x) { return x.id !== id; });
    DB.set('users', u);
}

function getTests(f) {
    var t = DB.get('tests', []);
    if (f) {
        if (f.published !== undefined) t = t.filter(function(x) { return x.published === f.published; });
        if (f.id) t = t.filter(function(x) { return x.id === f.id; });
    }
    return t;
}

function saveTest(t) {
    var tests = DB.get('tests', []);
    if (t.id) {
        var i = tests.findIndex(function(x) { return x.id === t.id; });
        if (i >= 0) tests[i] = Object.assign({}, tests[i], t);
    } else {
        t.id = generateId();
        t.createdAt = new Date().toISOString();
        tests.push(t);
    }
    DB.set('tests', tests);
    return t;
}

function deleteTest(id) {
    var tests = DB.get('tests').filter(function(x) { return x.id !== id; });
    DB.set('tests', tests);
    var questions = DB.get('questions').filter(function(x) { return x.testId !== id; });
    DB.set('questions', questions);
    var assignments = DB.get('assignments').filter(function(x) { return x.testId !== id; });
    DB.set('assignments', assignments);
}

function getQuestions(testId) {
    return DB.get('questions', []).filter(function(x) { return x.testId === testId; });
}

function saveQuestion(q) {
    var qs = DB.get('questions', []);
    if (q.id) {
        var i = qs.findIndex(function(x) { return x.id === q.id; });
        if (i >= 0) qs[i] = Object.assign({}, qs[i], q);
    } else {
        q.id = generateId();
        qs.push(q);
    }
    DB.set('questions', qs);
    return q;
}

function deleteQuestion(id) {
    var qs = DB.get('questions').filter(function(x) { return x.id !== id; });
    DB.set('questions', qs);
}

function getAssignments(userId) {
    return DB.get('assignments', []).filter(function(x) { return x.userId === userId; });
}

function getAllAssignments() {
    return DB.get('assignments', []);
}

function assignTest(a) {
    var as = DB.get('assignments', []);
    if (a.department) {
        var us = getUsers().filter(function(x) { return x.department === a.department && x.role === 'employee'; });
        us.forEach(function(u) {
            if (!as.some(function(y) { return y.testId === a.testId && y.userId === u.id; })) {
                as.push({ id: generateId(), testId: a.testId, userId: u.id, dueDate: a.dueDate, attempts: a.attempts, createdAt: new Date().toISOString() });
            }
        });
    } else {
        a.id = generateId();
        a.createdAt = new Date().toISOString();
        as.push(a);
    }
    DB.set('assignments', as);
}

function getResults(userId) {
    return DB.get('results', []).filter(function(x) { return x.userId === userId; });
}

function getAllResults(f) {
    var r = DB.get('results', []);
    if (f) {
        if (f.testId) r = r.filter(function(x) { return x.testId === f.testId; });
        if (f.userId) r = r.filter(function(x) { return x.userId === f.userId; });
    }
    return r;
}

function saveResult(r) {
    var results = DB.get('results', []);
    r.id = generateId();
    r.completedAt = new Date().toISOString();
    results.push(r);
    DB.set('results', results);
    return r;
}

function getStats(userId) {
    var as = userId ? getAssignments(userId) : getAllAssignments();
    var rs = userId ? getResults(userId) : getAllResults();
    var total = as.length;
    var completed = rs.length;
    var avg = completed > 0 ? Math.round(rs.reduce(function(s, x) { return s + x.percent; }, 0) / completed) : 0;
    return { total: total, completed: completed, pending: total - completed, avgScore: avg };
}

DB.init();
seedData();
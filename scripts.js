document.getElementById('submit-button').addEventListener('click', function () {
    // 获取用户输入
    const labName = document.getElementById('lab-name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const studentId = document.getElementById('student-id').value;

    // 验证输入
    if (!labName || !date || !time || !name || !studentId) {
        alert('请填写所有信息！');
        return;
    }

    // 创建新的预约记录
    const table = document.getElementById('reservation-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.textContent = name;
    cell2.textContent = studentId;
    cell3.textContent = labName;
    cell4.textContent = date;
    cell5.textContent = time;

    // 清空表单
    document.getElementById('lab-name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('name').value = '';
    document.getElementById('student-id').value = '';

    alert('预约成功！');
});
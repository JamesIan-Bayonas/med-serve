<!DOCTYPE html>
<html>
<head>
    <title>Add Patient</title>
</head>
<body>

    <h1>Add New Patient</h1>

    @if ($errors->any())
        <div style="color: red;">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('patients.store') }}" method="POST">
        @csrf

        <label>Name:</label><br>
        <input type="text" name="name" value="{{ old('name') }}"><br><br>

        <label>Age:</label><br>
        <input type="number" name="age" value="{{ old('age') }}"><br><br>

        <label>Gender:</label><br>
        <select name="gender">
            <option value="">Select Gender</option>
            <option value="Male" {{ old('gender') == 'Male' ? 'selected' : '' }}>Male</option>
            <option value="Female" {{ old('gender') == 'Female' ? 'selected' : '' }}>Female</option>
        </select><br><br>

        <label>Height:</label><br>
        <input type="number" step="0.01" name="height" value="{{ old('height') }}"> cm<br><br>

        <label>Weight:</label><br>
        <input type="number" step="0.01" name="weight" value="{{ old('weight') }}"> kg<br><br>

        <label>Reason for Checkup:</label><br>
        <textarea name="reason_for_checkup">{{ old('reason_for_checkup') }}</textarea><br><br>

        <button type="submit">Save Patient</button>
    </form>

    <br>

    <a href="{{ route('patients.index') }}">Back to Patients List</a>

</body>
</html>
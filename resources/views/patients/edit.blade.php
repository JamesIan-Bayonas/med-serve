<!DOCTYPE html>
<html>
<head>
    <title>Edit Patient</title>
</head>
<body>

<h1>Edit Patient Profile</h1>

@if ($errors->any())
    <div style="color:red;">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form action="{{ route('patients.update', $patient->id) }}" method="POST">

    @csrf
    @method('PUT')

    <label>Name:</label><br>
    <input type="text" name="name" value="{{ old('name', $patient->name) }}"><br><br>

    <label>Age:</label><br>
    <input type="number" name="age" value="{{ old('age', $patient->age) }}"><br><br>

    <label>Gender:</label><br>
    <select name="gender">
        <option value="Male" {{ $patient->gender == 'Male' ? 'selected' : '' }}>
            Male
        </option>

        <option value="Female" {{ $patient->gender == 'Female' ? 'selected' : '' }}>
            Female
        </option>
    </select><br><br>

    <label>Height:</label><br>
    <input type="number" step="0.01" name="height"
        value="{{ old('height', $patient->height) }}"><br><br>

    <label>Weight:</label><br>
    <input type="number" step="0.01" name="weight"
        value="{{ old('weight', $patient->weight) }}"><br><br>

    <label>Reason for Checkup:</label><br>
    <textarea name="reason_for_checkup">{{ old('reason_for_checkup', $patient->reason_for_checkup) }}</textarea><br><br>

    <button type="submit">Save Changes</button>

</form>

<br>

<a href="{{ route('patients.show', $patient->id) }}">
    Cancel
</a>

</body>
</html>
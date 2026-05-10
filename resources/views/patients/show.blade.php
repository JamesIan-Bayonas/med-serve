<!DOCTYPE html>
<html>
<head>
    <title>Patient Profile</title>
</head>
<body>

    <h1>Patient Profile</h1>

    @if(session('success'))
        <p style="color: green;">{{ session('success') }}</p>
    @endif

    <h2>Basic Information</h2>

    <p><strong>Name:</strong> {{ $patient->name }}</p>
    <p><strong>Age:</strong> {{ $patient->age }} years old</p>
    <p><strong>Gender:</strong> {{ $patient->gender }}</p>
    <p><strong>Height:</strong> {{ $patient->height }} cm</p>
    <p><strong>Weight:</strong> {{ $patient->weight }} kg</p>

    <h2>Latest Checkup Information</h2>

    <p><strong>Reason for Checkup:</strong> {{ $patient->reason_for_checkup ?? 'No reason recorded.' }}</p>

    <br>

    <a href="{{ route('patients.edit', $patient->id) }}">
    <button>Edit Profile</button>
</a>
    <a href="{{ route('patients.edit', $patient) }}">Edit Profile</a>
    <br><br>
    <a href="{{ route('patients.index') }}">Back to Patients List</a>

</body>
</html>
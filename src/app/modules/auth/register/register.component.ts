import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/forms/input/input.component';
import { TitleComponent } from '../../../shared/components/layout/title/title.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UserRole } from '../../../models/data/user.model';

@Component({
  selector: 'app-register',
  imports: [InputComponent, TitleComponent, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.registerForm = this.fb.group({
      idNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
      password: ['', Validators.required],
      role: ['student', Validators.required],
      department: ['', Validators.required],
      age: [18, [Validators.min(0)]],
    });
  }

  onSubmit() {
    const role: UserRole = {
      role: this.registerForm.value.role,
      department: this.registerForm.value.department,
    };

    const userData = {
      ...this.registerForm.value,
      roles: [role],
    };
    this.userService.createUser(userData).subscribe({
      next: (resp) => {
        console.log('User created successfully:', resp);
        // Optionally, reset the form or navigate to another page
        this.registerForm.reset();
      },
      error: (err) => console.error(err),
    });
  }
}

package com.example.telecom.controller;

import com.example.telecom.entity.Plan;
import com.example.telecom.service.PlanService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/plans")
@Tag(name = "Plan", description = "The Plan API")
public class PlanController {

    @Autowired
    private PlanService planService;

    @Operation(summary = "Create a new plan")
    @PostMapping
    public ResponseEntity<Plan> createPlan(@Valid @RequestBody Plan plan) {
        return ResponseEntity.ok(planService.createPlan(plan));
    }

    @Operation(summary = "Retrieve a plan by ID")
    @GetMapping("/{id}")
    public ResponseEntity<Plan> getPlanById(@PathVariable Long id) {
        return ResponseEntity.ok(planService.getPlanById(id));
    }

    @Operation(summary = "Retrieve all plans")
    @GetMapping
    public ResponseEntity<List<Plan>> getAllPlans() {
        return ResponseEntity.ok(planService.getAllPlans());
    }

    @Operation(summary = "Update a plan by ID")
    @PutMapping("/{id}")
    public ResponseEntity<Plan> updatePlan(@PathVariable Long id, @Valid @RequestBody Plan planDetails) {
        return ResponseEntity.ok(planService.updatePlan(id, planDetails));
    }

    @Operation(summary = "Delete a plan by ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlan(@PathVariable Long id) {
        planService.deletePlan(id);
        return ResponseEntity.noContent().build();
    }
}

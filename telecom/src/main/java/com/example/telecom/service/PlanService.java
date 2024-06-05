package com.example.telecom.service;

import com.example.telecom.entity.Plan;
import com.example.telecom.exception.ResourceNotFoundException;
import com.example.telecom.repository.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PlanService {

    @Autowired
    private PlanRepository planRepository;

    public Plan createPlan(Plan plan) {
        return planRepository.save(plan);
    }

    public Plan getPlanById(Long id) {
        return planRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Plan not found"));
    }

    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    public Plan updatePlan(Long id, Plan planDetails) {
        Plan plan = getPlanById(id);
        plan.setName(planDetails.getName());
        plan.setDescription(planDetails.getDescription());
        plan.setPrice(planDetails.getPrice());
        plan.setDataLimit(planDetails.getDataLimit());
        plan.setCallMinutes(planDetails.getCallMinutes());
        plan.setSmsLimit(planDetails.getSmsLimit());
        return planRepository.save(plan);
    }

    public void deletePlan(Long id) {
        Plan plan = getPlanById(id);
        planRepository.delete(plan);
    }
}

package com.example.telecom.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class PlanDTO {

    private Long id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    private String description;

    @NotNull(message = "Price is mandatory")
    private Double price;

    @NotNull(message = "Data limit is mandatory")
    private Integer dataLimit;

    @NotNull(message = "Call minutes is mandatory")
    private Integer callMinutes;

    @NotNull(message = "SMS limit is mandatory")
    private Integer smsLimit;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getDataLimit() {
        return dataLimit;
    }

    public void setDataLimit(Integer dataLimit) {
        this.dataLimit = dataLimit;
    }

    public Integer getCallMinutes() {
        return callMinutes;
    }

    public void setCallMinutes(Integer callMinutes) {
        this.callMinutes = callMinutes;
    }

    public Integer getSmsLimit() {
        return smsLimit;
    }

    public void setSmsLimit(Integer smsLimit) {
        this.smsLimit = smsLimit;
    }
}

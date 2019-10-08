import { DomainResource } from './DomainResource';

export enum CatalogEntryTypeEnum{
    ACTIVITYDEFINITION = 'ActivityDefinition',
    DEVICEDEFINITION = 'DeviceDefinition',
    HEALTHCARESERVICE = 'HealthcareService',
    LOCATION = 'Location',
    MEDICATION = 'Medication',
    MEDICATIONKNOWLEDGE = 'MedicationKnowledge',
    OBSERVATIONDEFINITION = 'ObservationDefinition',
    ORGANIZATION = 'Organization',
    PLANDEFINITION = 'PlanDefinition',
    PRACTITIONER = 'Practitioner',
    PRACTITIONERROLE = 'PractitionerRole',
    SPECIMENDEFINITION = 'SpecimenDefinition',
    SUBSTANCE = 'Substance',
}

import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Practitioner_PractitionerRole      extends DSTU2_BackboneElement
{

   static def : string = 'Practitioner_PractitionerRole';
   managingOrganization : DSTU2_Reference ;
   role : DSTU2_CodeableConcept ;
   specialty : DSTU2_CodeableConcept [];
   period : DSTU2_Period ;
   location : DSTU2_Reference [];
   healthcareService : DSTU2_Reference [];
}

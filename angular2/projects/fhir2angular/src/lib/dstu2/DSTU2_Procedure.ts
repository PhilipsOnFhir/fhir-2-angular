import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_ProcedureStatusEnum } from './DSTU2_ProcedureStatusEnum'
import { DSTU2_Procedure_FocalDevice } from './DSTU2_Procedure_FocalDevice'
import { DSTU2_Procedure_Performer } from './DSTU2_Procedure_Performer'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Procedure      extends DSTU2_DomainResource
{

   static def : string = 'Procedure';
   identifier : DSTU2_Identifier [];
   subject : DSTU2_Reference ;
   status : DSTU2_ProcedureStatusEnum ;
   category : DSTU2_CodeableConcept ;
   code : DSTU2_CodeableConcept ;
   notPerformed : boolean ;
   reasonNotPerformed : DSTU2_CodeableConcept [];
   bodySite : DSTU2_CodeableConcept [];
   reasonCodeableConcept : DSTU2_CodeableConcept ;
   reasonReference : DSTU2_Reference ;
   performer : DSTU2_Procedure_Performer [];
   performedDateTime : string ;
   performedPeriod : DSTU2_Period ;
   encounter : DSTU2_Reference ;
   location : DSTU2_Reference ;
   outcome : DSTU2_CodeableConcept ;
   report : DSTU2_Reference [];
   complication : DSTU2_CodeableConcept [];
   followUp : DSTU2_CodeableConcept [];
   request : DSTU2_Reference ;
   notes : DSTU2_Annotation [];
   focalDevice : DSTU2_Procedure_FocalDevice [];
   used : DSTU2_Reference [];
}

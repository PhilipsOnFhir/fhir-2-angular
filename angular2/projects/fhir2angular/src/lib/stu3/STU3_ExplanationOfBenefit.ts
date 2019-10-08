import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ExplanationOfBenefitStatusEnum } from './STU3_ExplanationOfBenefitStatusEnum'
import { STU3_ExplanationOfBenefit_Accident } from './STU3_ExplanationOfBenefit_Accident'
import { STU3_ExplanationOfBenefit_AddItem } from './STU3_ExplanationOfBenefit_AddItem'
import { STU3_ExplanationOfBenefit_BenefitBalance } from './STU3_ExplanationOfBenefit_BenefitBalance'
import { STU3_ExplanationOfBenefit_CareTeam } from './STU3_ExplanationOfBenefit_CareTeam'
import { STU3_ExplanationOfBenefit_Diagnosis } from './STU3_ExplanationOfBenefit_Diagnosis'
import { STU3_ExplanationOfBenefit_Information } from './STU3_ExplanationOfBenefit_Information'
import { STU3_ExplanationOfBenefit_Insurance } from './STU3_ExplanationOfBenefit_Insurance'
import { STU3_ExplanationOfBenefit_Item } from './STU3_ExplanationOfBenefit_Item'
import { STU3_ExplanationOfBenefit_Payee } from './STU3_ExplanationOfBenefit_Payee'
import { STU3_ExplanationOfBenefit_Payment } from './STU3_ExplanationOfBenefit_Payment'
import { STU3_ExplanationOfBenefit_Procedure } from './STU3_ExplanationOfBenefit_Procedure'
import { STU3_ExplanationOfBenefit_ProcessNote } from './STU3_ExplanationOfBenefit_ProcessNote'
import { STU3_ExplanationOfBenefit_Related } from './STU3_ExplanationOfBenefit_Related'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ExplanationOfBenefit      extends STU3_DomainResource
{

   static def : string = 'ExplanationOfBenefit';
   identifier : STU3_Identifier [];
   status : STU3_ExplanationOfBenefitStatusEnum ;
   type : STU3_CodeableConcept ;
   subType : STU3_CodeableConcept [];
   patient : STU3_Reference ;
   billablePeriod : STU3_Period ;
   created : string ;
   enterer : STU3_Reference ;
   insurer : STU3_Reference ;
   provider : STU3_Reference ;
   organization : STU3_Reference ;
   referral : STU3_Reference ;
   facility : STU3_Reference ;
   claim : STU3_Reference ;
   claimResponse : STU3_Reference ;
   outcome : STU3_CodeableConcept ;
   disposition : string ;
   related : STU3_ExplanationOfBenefit_Related [];
   prescription : STU3_Reference ;
   originalPrescription : STU3_Reference ;
   payee : STU3_ExplanationOfBenefit_Payee ;
   information : STU3_ExplanationOfBenefit_Information [];
   careTeam : STU3_ExplanationOfBenefit_CareTeam [];
   diagnosis : STU3_ExplanationOfBenefit_Diagnosis [];
   procedure : STU3_ExplanationOfBenefit_Procedure [];
   precedence : string ;
   insurance : STU3_ExplanationOfBenefit_Insurance ;
   accident : STU3_ExplanationOfBenefit_Accident ;
   employmentImpacted : STU3_Period ;
   hospitalization : STU3_Period ;
   item : STU3_ExplanationOfBenefit_Item [];
   addItem : STU3_ExplanationOfBenefit_AddItem [];
   totalCost : string ;
   unallocDeductable : string ;
   totalBenefit : string ;
   payment : STU3_ExplanationOfBenefit_Payment ;
   form : STU3_CodeableConcept ;
   processNote : STU3_ExplanationOfBenefit_ProcessNote [];
   benefitBalance : STU3_ExplanationOfBenefit_BenefitBalance [];
}

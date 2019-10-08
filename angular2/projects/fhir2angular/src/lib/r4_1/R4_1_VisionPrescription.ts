import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_VisionPrescription_LensSpecification } from './R4_1_VisionPrescription_LensSpecification'

export class R4_1_VisionPrescription      extends R4_1_DomainResource
{

   static def : string = 'VisionPrescription';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   created : string ;
   patient : R4_1_Reference ;
   encounter : R4_1_Reference ;
   dateWritten : string ;
   prescriber : R4_1_Reference ;
   lensSpecification : R4_1_VisionPrescription_LensSpecification [];
}

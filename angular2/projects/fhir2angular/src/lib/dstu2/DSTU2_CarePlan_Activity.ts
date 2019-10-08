import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CarePlan_Detail } from './DSTU2_CarePlan_Detail'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_CarePlan_Activity      extends DSTU2_BackboneElement
{

   static def : string = 'CarePlan_Activity';
   actionResulting : DSTU2_Reference [];
   progress : DSTU2_Annotation [];
   reference : DSTU2_Reference ;
   detail : DSTU2_CarePlan_Detail ;
}
